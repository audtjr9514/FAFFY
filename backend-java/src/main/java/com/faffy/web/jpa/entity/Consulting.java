package com.faffy.web.jpa.entity;

import lombok.Data;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
public class Consulting extends BaseEntity {
    @OneToOne
    @JoinColumn(name = "consultant_no")
    private User consultant;
    @Column(nullable = false)
    private String title;
    private int roomSize;
    private int viewCount;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "category_no")
    private FashionCategory category;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}

