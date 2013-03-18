Ext.define('Обработки.ФормированиеЗаказовНаОбслуживаниеОС.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:391px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование заказов на обслуживание ОС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Открыть список заказов на обслуживание ОС',
				},
					]
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:366px;width:736px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:227px;top:57px;width:501px;height:301px;',
			height: 301,width: 501,
			columns:
			[
				{
					text:'',
					width:'18',
				},
				{
					text:'Основное средство',
					width:'179',
				},
				{
					text:'Дата обслуживания',
					width:'111',
				},
				{
					text:'Расч. дата обслуживания',
					width:'114',
				},
				{
					text:'Количество',
					width:'83',
				},
				{
					text:'Последнее обслуживание',
					width:'92',
				},
				{
					text:'Норматив',
					width:'57',
				},
				{
					text:'Периодичность',
					width:'85',
				},
				{
					text:'Параметр',
					width:'65',
				},
				{
					text:'Значение',
					width:'56',
				},
				{
					text:'Выработка',
					width:'70',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:215px;height:301px;',
			height: 301,width: 215,
			columns:
			[
				{
					text:'Услуга/Дата ремонта',
					width:'208',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:227px;top:33px;width:501px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:215px;height:24px;',
			items:
			[
				{
					text:'Новая дата',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
	]
});