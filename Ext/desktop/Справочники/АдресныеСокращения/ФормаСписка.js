Ext.define('Справочники.АдресныеСокращения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 436,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Уровень',
				},
				{
					text:'Сокращение',
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