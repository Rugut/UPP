Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаСпискаФайловИИзображений',
	{
	extend: 'Ext.window.Window',
	height: 254,width: 651,
	iconCls: 'bogus',
	title: 'Хранилище дополнительной информации',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:10px;width:635px;height:236px;',
			height: 236,width: 635,
			items:
			[
				{
					title:'Изображения',
				},
				{
					title:'Файлы',
				},
			]
		},
	]
});