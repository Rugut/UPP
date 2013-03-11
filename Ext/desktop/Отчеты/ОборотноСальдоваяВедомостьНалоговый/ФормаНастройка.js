Ext.define('Отчеты.ОборотноСальдоваяВедомостьНалоговый.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 237,width: 428,
	iconCls: 'bogus',
	title: 'Настройка: Оборотно-сальдовая ведомость',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:212px;width:428px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Отмена',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:412px;height:204px;',
			height: 204,width: 412,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:31px;width:219px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:4px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:197px;top:4px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:284px;top:4px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУчета',
			style: 'position:absolute;left:84px;top:57px;width:219px;height:19px;',
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:4px;width:400px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:28px;width:400px;height:152px;',
			height: 152,width: 400,
			columns:
			[
				{
					text:'Счет',
				},
				{
					text:'Субсчета',
				},
				{
					text:'ПредставлениеРазворотПоСубконто',
				},
			]
		},
					]
				},
				{
					title:'СтраницаДетализацияОтчета',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:4px;width:400px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:28px;width:400px;height:152px;',
			height: 152,width: 400,
			columns:
			[
				{
					text:'Счет',
				},
				{
					text:'Субсчета',
				},
				{
					text:'ПредставлениеРазворотПоСубконто',
				},
			]
		},
					]
				},
			]
		},
	]
});