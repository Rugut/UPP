Ext.define('Документы.ЗаказПоставщику.ФормаНастройкиРежимаЗаполнитьИПровести',
	{
	extend: 'Ext.window.Window',
	height: 148,width: 304,
	iconCls: 'bogus',
	title: 'Выберите документы и настройте их порядок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:123px;width:304px;height:25px;',
			items:
			[
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:24px;',
			items:
			[
				{
					text:'ДействиеСдвинутьВниз',
				},
				{
					text:'ДействиеСнятьПометки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеУстановитьПометки',
				},
				{
					text:'ДействиеСдвинутьВверх',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});