Ext.define('Справочники.Кассы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 189,width: 515,
	iconCls: 'bogus',
	title: 'Кассы',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:447px;top:84px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:84px;width:310px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:57px;width:413px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДенежныхСредств',
			style: 'position:absolute;left:94px;top:108px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:515px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:164px;width:515px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственноеЛицо',
			style: 'position:absolute;left:94px;top:134px;width:310px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаИстория',
			text: 'История...',
			style: 'position:absolute;left:431px;top:134px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:94px;top:33px;width:413px;height:19px;',
		},
	]
});