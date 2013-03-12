Ext.define('Справочники.АдресныеСокращения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:436px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Адресные сокращения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:420px;height:320px;',
			height: 320,width: 420,
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
					text:'Уровень',
					width:'48',
				},
				{
					text:'Сокращение',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:436px;height:25px;',
			items:
			[
			]
		},
	]
});