Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактур',
	{
	extend: 'Ext.window.Window',
	height: 293,width: 577,
	iconCls: 'bogus',
	title: 'Подбор счетов-фактур',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:268px;width:577px;height:25px;',
			items:
			[
				{
					text:'ДействиеОтмена',
				},
				{
					text:'Сохранить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:55px;width:561px;height:204px;',
			height: 204,width: 561,
			columns:
			[
				{
					text:'Выбрана',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'ВидЦенности',
				},
				{
					text:'КодОперацииДляДекларации',
				},
				{
					text:'Поставщик',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'ДокументОплаты',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'НДС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:31px;width:561px;height:24px;',
			items:
			[
				{
					text:'ВыделитьВсе',
				},
				{
					text:'СнятьВыделениеВсех',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновноеСредство',
			style: 'position:absolute;left:118px;top:8px;width:248px;height:19px;',
		},
	]
});