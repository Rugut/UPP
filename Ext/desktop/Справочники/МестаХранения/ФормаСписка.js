Ext.define('Справочники.МестаХранения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Места хранения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:438px;height:279px;',
			height: 279,width: 438,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Владелец',
					width:'76',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'264',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					text:'Редактировать код',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:279px;',
			height: 279,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
	]
});