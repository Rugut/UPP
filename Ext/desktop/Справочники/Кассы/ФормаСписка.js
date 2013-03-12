Ext.define('Справочники.Кассы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:345px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Валюта',
					width:'80',
				},
				{
					text:'Организация',
					width:'236',
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
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:33px;width:448px;height:19px;',
		},
	]
});