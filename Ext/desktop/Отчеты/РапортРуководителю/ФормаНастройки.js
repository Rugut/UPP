Ext.define('Отчеты.РапортРуководителю.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 448,
	iconCls: 'bogus',
	title: 'Настройка показателей',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:434px;height:379px;',
			height: 379,width: 434,
			items:
			[
				{
					title:'Показатели',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:420px;height:24px;',
			items:
			[
				{
					text:'ПереместитьВверх',
				},
				{
					text:'Добавить',
				},
				{
					text:'Параметры1',
				},
				{
					text:'Выбор',
				},
				{
					text:'ПереместитьВниз',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:420px;height:244px;',
			height: 244,width: 420,
			columns:
			[
				{
					text:'ПредставлениеПоказателя',
				},
				{
					text:'Показатель',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТекДата',
			style: 'position:absolute;left:94px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКаталог',
			style: 'position:absolute;left:150px;top:168px;width:276px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаАдресаЭлПочты',
			style: 'position:absolute;left:150px;top:192px;width:276px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаИнтервалАвтообновления',
			style: 'position:absolute;left:122px;top:99px;width:60px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:150px;top:272px;width:276px;height:80px;',
			height: 80,width: 276,
			columns:
			[
				{
					text:'Время',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:150px;top:248px;width:276px;height:24px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				{
					text:'СортироватьПоВозрастанию',
				},
				{
					text:'СортироватьПоУбыванию',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыУчетнойЗаписи',
			style: 'position:absolute;left:150px;top:216px;width:276px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:448px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Справка1',
				},
			]
		},
	]
});