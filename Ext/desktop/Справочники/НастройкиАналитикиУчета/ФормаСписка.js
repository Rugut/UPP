Ext.define('Справочники.НастройкиАналитикиУчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 506,
	iconCls: 'bogus',
	title: 'Настройки аналитики учета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:490px;height:539px;',
			height: 539,width: 490,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'УправленческийУчет',
				},
				{
					text:'РегламентированныйУчет',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:506px;height:25px;',
			items:
			[
				{
					text:'ДействиеОбновить',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'ЗаполнитьПоУмолчанию',
				},
				{
					text:'ДействиеЗакончитьРедактирование',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});