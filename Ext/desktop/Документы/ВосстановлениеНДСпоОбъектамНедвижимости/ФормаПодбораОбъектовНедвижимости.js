Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораОбъектовНедвижимости',
	{
	extend: 'Ext.window.Window',
	height: 303,width: 538,
	iconCls: 'bogus',
	title: 'Подбор объектов недвижимости',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:278px;width:538px;height:25px;',
			items:
			[
				{
					text:'Сохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:79px;width:522px;height:191px;',
			height: 191,width: 522,
			columns:
			[
				{
					text:'Выбран',
				},
				{
					text:'ОбъектНедвижимости',
				},
				{
					text:'ДатаВводаВЭксплуатациюБУ',
				},
				{
					text:'ДатаНачисленияАмортизацииНУ',
				},
				{
					text:'СтоимостьОбъектаНедвижимости',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппыУчетаОС',
			style: 'position:absolute;left:103px;top:7px;width:427px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:55px;width:522px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Очистить',
				},
				{
					text:'СнятьВыделениеВсех',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВыделитьВсе',
				},
			]
		},
	]
});