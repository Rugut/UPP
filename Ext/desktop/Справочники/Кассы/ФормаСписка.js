Ext.define('Справочники.Кассы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 345,width: 554,
	iconCls: 'bogus',
	title: 'Кассы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:59px;width:372px;height:278px;',
			height: 278,width: 372,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВалютаДенежныхСредств',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:59px;width:160px;height:278px;',
			height: 278,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:33px;width:448px;height:19px;',
		},
	]
});