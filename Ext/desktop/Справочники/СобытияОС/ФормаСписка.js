Ext.define('Справочники.СобытияОС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:693px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник События основного средства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:677px;height:320px;',
			height: 320,width: 677,
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
					text:'Вид события ОС',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:693px;height:25px;',
			items:
			[
			]
		},
	]
});