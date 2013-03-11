Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ПечатьРегламентированныхОтчетов',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 740,
	iconCls: 'bogus',
	title: 'Предварительный просмотр',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:740px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Сохранить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ВФорматеMicrosoftExcel',
				},
				{
					text:'ВВидеТабличныхДокументов',
				},
				{
					text:'АктивизироватьРодительскийОтчет',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:51px;width:198px;height:244px;',
			height: 244,width: 198,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ТабличныйДокумент',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоКопий',
			style: 'position:absolute;left:117px;top:319px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:25px;width:198px;height:24px;',
			items:
			[
				{
					text:'Свернуть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПереместитьВниз',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УстановитьПометки',
				},
				{
					text:'Раскрыть',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'РаспометитьВсе',
				},
			]
		},
	]
});