Ext.define('Справочники.ВариантыНастроекФинАнализа.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 420,
	iconCls: 'bogus',
	title: 'Справочник Варианты настроек финанализа',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:404px;height:259px;',
			height: 259,width: 404,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:420px;height:25px;',
			items:
			[
			]
		},
	]
});