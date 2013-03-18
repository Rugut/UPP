Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактур',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:577px;height:293px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подбор счетов-фактур',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:268px;width:577px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Отмена',
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
					text:'',
					width:'40',
				},
				{
					text:'Счет фактура',
					width:'100',
				},
				{
					text:'Вид ценности',
					width:'100',
				},
				{
					text:'Код операции (для декларации)',
					width:'100',
				},
				{
					text:'Поставщик',
					width:'100',
				},
				{
					text:'Дата оплаты',
					width:'100',
				},
				{
					text:'Документ оплаты',
					width:'100',
				},
				{
					text:'Сумма без НДС',
					width:'100',
				},
				{
					text:'% НДС',
					width:'100',
				},
				{
					text:'НДС',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:31px;width:561px;height:24px;',
			items:
			[
				{
					text:'Выделить все',
				},
				{
					text:'Снять выделение всех',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОсновноеСредство',
			text: 'Основное средство:',
			style: 'position:absolute;left:8px;top:8px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновноеСредство',
			style: 'position:absolute;left:118px;top:8px;width:248px;height:19px;',
		},
	]
});