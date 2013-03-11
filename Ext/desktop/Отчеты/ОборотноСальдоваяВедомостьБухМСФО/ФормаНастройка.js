Ext.define('Отчеты.ОборотноСальдоваяВедомостьБухМСФО.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 311,width: 328,
	iconCls: 'bogus',
	title: 'Настройка: Оборотно-сальдовая ведомость',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:286px;width:328px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:312px;height:270px;',
			height: 270,width: 312,
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
			style: 'position:absolute;left:84px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:6px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:298px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:298px;height:220px;',
			height: 220,width: 298,
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
			style: 'position:absolute;left:6px;top:0px;width:298px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:298px;height:220px;',
			height: 220,width: 298,
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