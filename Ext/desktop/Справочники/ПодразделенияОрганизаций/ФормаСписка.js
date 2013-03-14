Ext.define('Справочники.ПодразделенияОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:512px;height:380px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подразделения организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:496px;height:315px;',
			height: 315,width: 496,
			columns:
			[
				{
					text:'Наименование',
					width:'240',
				},
				{
					text:'Код',
					width:'84',
				},
				{
					text:'Код по ОКАТО',
					width:'80',
				},
				{
					text:'КПП',
					width:'80',
				},
				{
					text:'Порядок',
					width:'49',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:512px;height:25px;',
			items:
			[
				{
					text:'Доступ к текущему элементу',
				},
				{
					text:'Доступ к справочнику в целом',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Подразделения организации',
			style: 'position:absolute;left:8px;top:33px;width:223px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:233px;top:33px;width:271px;height:19px;',
		},
	]
});