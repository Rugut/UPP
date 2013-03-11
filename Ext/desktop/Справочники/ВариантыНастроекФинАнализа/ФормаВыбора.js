Ext.define('Справочники.ВариантыНастроекФинАнализа.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 488,
	iconCls: 'bogus',
	title: 'Справочник Варианты настроек финанализа',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:472px;height:259px;',
			height: 259,width: 472,
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
			style: 'position:absolute;left:0px;top:0px;width:488px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});