﻿Ext.define('Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:335px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки формирования документов отработанного времени',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:101px;top:58px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:101px;top:33px;width:307px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:416px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаФормирования',
			text: 'Формировать документы начиная с: ',
			style: 'position:absolute;left:8px;top:82px;width:190px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:203px;top:82px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:106px;width:400px;height:172px;',
			height: 172,width: 400,
			items:
			[
				{
					title:'Создавать документы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода4',
			style: 'position:absolute;left:99px;top:6px;width:293px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По дням периода',
			style: 'position:absolute;left:6px;top:103px;width:168px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сводно, в целом за период',
			style: 'position:absolute;left:6px;top:127px;width:168px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодДетализации',
			text: 'Детализация',
			style: 'position:absolute;left:6px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодДетализации',
			style: 'position:absolute;left:99px;top:54px;width:293px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:6px;top:26px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода5',
			style: 'position:absolute;left:99px;top:30px;width:293px;height:19px;',
		},
					]
				},
				{
					title:'Расписание',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание',
			style: 'position:absolute;left:6px;top:6px;width:156px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПредставлениеРасписания',
			text: '<Ввести расписание>',
			style: 'position:absolute;left:22px;top:30px;width:296px;height:43px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задержка',
			style: 'position:absolute;left:278px;top:78px;width:40px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не обрабатывать документы за предыдущие: ',
			style: 'position:absolute;left:22px;top:78px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеЗадержка',
			text: '',
			style: 'position:absolute;left:39px;top:102px;width:353px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗадержка',
			text: 'дней',
			style: 'position:absolute;left:323px;top:78px;width:29px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода6',
			style: 'position:absolute;left:101px;top:283px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий',
			style: 'position:absolute;left:8px;top:283px;width:88px;height:19px;',
		},
	]
});