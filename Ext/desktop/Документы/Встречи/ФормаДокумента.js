Ext.define('Документы.Встречи.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:446px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Встреча',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:675px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Открыть свойства',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Открыть категории',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Открыть категории',
				},
				{
					text:'Открыть свойства',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:675px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:257px;top:394px;width:43px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:300px;top:394px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'Дата регистрации:',
			style: 'position:absolute;left:8px;top:394px;width:107px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:116px;top:394px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Зарегистрировал:',
			style: 'position:absolute;left:395px;top:394px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:495px;top:394px;width:172px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:659px;height:226px;',
			height: 226,width: 659,
			items:
			[
				{
					title:'Встреча',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:6px;width:645px;height:194px;',
		},
					]
				},
				{
					title:'Планирование',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаПланирования',
			text: '12 октября 2007 г',
			style: 'position:absolute;left:379px;top:6px;width:130px;height:24px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:245px;top:6px;width:130px;height:24px;',
			items:
			[
				{
					text:'Предыдущий день',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:527px;top:6px;width:123px;height:24px;',
			items:
			[
				{
					text:'Следующий день',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:27px;width:75px;height:24px;',
			items:
			[
				{
					text:'Подобрать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:222px;height:144px;',
			height: 144,width: 222,
			columns:
			[
				{
					text:'Физлицо',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:81px;top:27px;width:147px;height:24px;',
			items:
			[
				{
					text:'Отображать занятость',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:18px;top:111px;width:175px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Подобрать',
				},
				'-',
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПомещение',
			text: 'Место:',
			style: 'position:absolute;left:8px;top:63px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Помещение',
			style: 'position:absolute;left:58px;top:63px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЧасов1',
			text: 'Продолж-ть:',
			style: 'position:absolute;left:257px;top:33px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Продолжительность',
			style: 'position:absolute;left:331px;top:33px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРезервирования1',
			text: 'Дата:',
			style: 'position:absolute;left:8px;top:33px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРезервирования',
			style: 'position:absolute;left:58px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРезервирования2',
			text: 'Начало:',
			style: 'position:absolute;left:147px;top:33px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНачала',
			style: 'position:absolute;left:192px;top:33px;width:52px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: 'Встреча назначена на 12 часов в помещении 2204',
			style: 'position:absolute;left:39px;top:336px;width:628px;height:35px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Это - встреча с кандидатом',
			style: 'position:absolute;left:495px;top:33px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаявкаКандидата',
			style: 'position:absolute;left:495px;top:57px;width:172px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодобратьСвободноеПомещение',
			text: 'Подобрать свободное помещение',
			style: 'position:absolute;left:257px;top:63px;width:123px;height:36px;',
		},
	]
});