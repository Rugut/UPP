Ext.define('Справочники.НастройкиЗакрытияМесяца.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:868px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Настройки закрытия месяца',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:701px;height:259px;',
			height: 259,width: 701,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Наименование',
					width:'284',
				},
				{
					text:'Дата начала действия настройки',
					width:'204',
				},
				{
					text:'УУ',
					width:'49',
				},
				{
					text:'БУ',
					width:'36',
				},
				{
					text:'НУ',
					width:'31',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:868px;height:25px;',
			items:
			[
			]
		},
	]
});