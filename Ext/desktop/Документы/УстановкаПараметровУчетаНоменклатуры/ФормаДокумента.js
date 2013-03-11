Ext.define('Документы.УстановкаПараметровУчетаНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 388,width: 800,
	iconCls: 'bogus',
	title: 'Установка параметров учета номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие7',
				},
				{
					text:'ДействиеПровести',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:363px;width:800px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:48px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:148px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:312px;width:696px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:336px;width:696px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:784px;height:244px;',
			height: 244,width: 784,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Услуги',
				},
				{
					title:'ПорядокУчетаВДокументах',
				},
			]
		},
	]
});