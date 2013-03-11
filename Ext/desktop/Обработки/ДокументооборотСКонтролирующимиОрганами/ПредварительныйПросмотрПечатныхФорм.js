Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПредварительныйПросмотрПечатныхФорм',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 740,
	iconCls: 'bogus',
	title: 'Печать документов циклов обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:740px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Сохранить',
				},
				{
					text:'ВВидеТабличныхДокументов',
				},
				{
					text:'ВФорматеMicrosoftExcel',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:198px;height:319px;',
			height: 319,width: 198,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Объект',
				},
				{
					text:'ТабличныйДокумент',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:25px;width:198px;height:24px;',
			items:
			[
				{
					text:'ПереместитьВниз',
				},
				{
					text:'Раскрыть',
				},
				{
					text:'УстановитьПометки',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'Свернуть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РаспометитьВсе',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоКопий',
			style: 'position:absolute;left:160px;top:398px;width:46px;height:19px;',
		},
	]
});