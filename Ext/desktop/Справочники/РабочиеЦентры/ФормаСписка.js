Ext.define('Справочники.РабочиеЦентры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Рабочие центры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:472px;height:280px;',
			height: 280,width: 472,
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
					text:'Подразделение',
					width:'180',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
	]
});