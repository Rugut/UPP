﻿Ext.define('Справочники.НастройкиРасчетаСебестоимости.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:394px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка расчета себестоимости',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:83px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:105px;top:83px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:8px;top:146px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:394px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:393px;width:394px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:169px;width:378px;height:189px;',
			height: 189,width: 378,
			items:
			[
				{
					title:'Выполняемые действия',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:363px;height:133px;',
			height: 133,width: 363,
			columns:
			[
				{
					text:'Выполняемое действие',
					width:'333',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:363px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Автоматическое выполнение',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание',
			style: 'position:absolute;left:6px;top:17px;width:156px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПредставлениеРасписания',
			text: '<Ввести расписание>',
			style: 'position:absolute;left:22px;top:41px;width:348px;height:43px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задержка',
			style: 'position:absolute;left:218px;top:89px;width:25px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рассчитывать за прошлый месяц:',
			style: 'position:absolute;left:22px;top:89px;width:191px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗадержка',
			text: 'месяц',
			style: 'position:absolute;left:246px;top:89px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеЗадержка',
			text: '',
			style: 'position:absolute;left:37px;top:113px;width:333px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:105px;top:57px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:105px;top:33px;width:281px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:105px;top:146px;width:72px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'регл. учете',
			style: 'position:absolute;left:190px;top:146px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:366px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:105px;top:366px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройкаЗакрытияМесяца',
			text: 'Настройка закрытия месяца:',
			style: 'position:absolute;left:8px;top:109px;width:94px;height:30px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаЗакрытияМесяца',
			style: 'position:absolute;left:105px;top:109px;width:281px;height:19px;',
		},
	]
});