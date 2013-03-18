Ext.define('Справочники.ВнешниеОбработки.ФормаВыбораТЧПринадлежности',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:335px;height:245px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Табличная часть',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:220px;width:335px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
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
					width:'0',
				},
			]
		},
	]
});