Ext.define('Отчеты.РасчетнаяВедомость.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:645px;height:462px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки отчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:437px;width:645px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:62px;width:182px;height:82px;',
			height: 82,width: 182,
			columns:
			[
				{
					text:'Заголовок',
					width:'100',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:149px;width:182px;height:96px;',
			height: 96,width: 182,
			columns:
			[
				{
					text:'Заголовок',
					width:'100',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:38px;top:254px;width:178px;height:80px;',
			height: 80,width: 178,
			columns:
			[
				{
					text:'Заголовок',
					width:'100',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:347px;width:182px;height:74px;',
			height: 74,width: 182,
			columns:
			[
				{
					text:'Заголовок',
					width:'100',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:23px;width:222px;height:406px;',
			height: 406,width: 222,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:258px;top:9px;width:379px;height:420px;',
			height: 420,width: 379,
			items:
			[
				{
					title:'Структура отчета',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:384px;',
			height: 384,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница не таблица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:193px;width:365px;height:191px;',
			height: 191,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Заголовок',
					width:'100',
				},
				{
					text:'Расположение',
					width:'100',
				},
				{
					text:'Поле',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:365px;height:24px;',
			items:
			[
				{
					text:'Добавить поле',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:365px;height:95px;',
			height: 95,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип группировки',
					width:'100',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип дополнения',
					width:'100',
				},
				{
					text:'Начальная дата периода',
					width:'100',
				},
				{
					text:'Конечная дата периода',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:169px;width:365px;height:24px;',
			items:
			[
				{
					text:'Добавить поле',
				},
				'-',
				{
					text:'Добавить группу',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:9px;top:275px;width:348px;height:24px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Отбор и упорядочивание',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:384px;',
			height: 384,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница без параметров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:365px;height:144px;',
			height: 144,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:365px;height:24px;',
			items:
			[
				{
					text:'Добавить поле',
				},
				'-',
				{
					text:'Добавить группу',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:240px;width:365px;height:144px;',
			height: 144,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Направление упорядочивания',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:214px;width:365px;height:24px;',
			items:
			[
				{
					text:'Добавить поле',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Оформление',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:385px;',
			height: 385,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Оформление',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Отрицательное красным',
			style: 'position:absolute;left:0px;top:44px;width:145px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать заголовок',
			style: 'position:absolute;left:0px;top:22px;width:135px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:114px;width:365px;height:271px;',
			height: 271,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Оформление',
					width:'100',
				},
				{
					text:'Условие',
					width:'100',
				},
				{
					text:'Область',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Оформление',
					width:'100',
				},
				{
					text:'Условие',
					width:'100',
				},
				{
					text:'Область',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:86px;width:365px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:235px;top:8px;width:16px;height:420px;',
			height: 420,width: 16,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'button',
			name: 'Вправо31',
			text: '>',
			style: 'position:absolute;left:0px;top:96px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево31',
			text: '<',
			style: 'position:absolute;left:0px;top:119px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Вправо33',
			text: '>',
			style: 'position:absolute;left:0px;top:270px;width:16px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'Влево33',
			text: '<',
			style: 'position:absolute;left:0px;top:296px;width:16px;height:21px;',
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'button',
			name: 'Вправо21',
			text: '>',
			style: 'position:absolute;left:0px;top:107px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево21',
			text: '<',
			style: 'position:absolute;left:0px;top:130px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Вправо22',
			text: '>',
			style: 'position:absolute;left:0px;top:312px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево22',
			text: '<',
			style: 'position:absolute;left:0px;top:335px;width:16px;height:21px;',
		},
					]
				},
				{
					title:'Страница0',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:21px;top:110px;width:203px;height:24px;',
			items:
			[
				{
					text:'Вывести список...',
				},
				'-',
			]
		},
	]
});