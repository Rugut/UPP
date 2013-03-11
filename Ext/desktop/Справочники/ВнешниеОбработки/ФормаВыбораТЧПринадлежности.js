Ext.define('Справочники.ВнешниеОбработки.ФормаВыбораТЧПринадлежности',
	{
	extend: 'Ext.window.Window',
	height: 245,width: 335,
	iconCls: 'bogus',
	title: 'Табличная часть',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:220px;width:335px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'КнопкаОК',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:319px;height:204px;',
			height: 204,width: 319,
			columns:
			[
				{
					text:'',
				},
			]
		},
	]
});