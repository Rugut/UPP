Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ФормаПодбораЗадолженностей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:354px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Подбор задолженности для платежа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:51px;width:764px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:75px;width:764px;height:220px;',
			height: 220,width: 764,
			columns:
			[
				{
					text:'Вид взаиморасчетов',
					width:'100',
				},
				{
					text:'Договор контрагента',
					width:'186',
				},
				{
					text:'Сделка',
					width:'195',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
				},
				{
					text:'Курс взаиморасчетов',
					width:'87',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'129',
				},
				{
					text:'Сумма платежа',
					width:'120',
				},
				{
					text:'Дата возникновения',
					width:'78',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:317px;width:102px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:121px;top:317px;width:133px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Планируемое поступление денежных средств',
			style: 'position:absolute;left:408px;top:317px;width:257px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сумма взаиморасчетов',
			style: 'position:absolute;left:259px;top:317px;width:143px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По фактической задолженности',
			style: 'position:absolute;left:8px;top:8px;width:184px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По оперативной задолженности (с учетом заказов)',
			style: 'position:absolute;left:201px;top:8px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыбрано',
			text: 'Всего выбрано:',
			style: 'position:absolute;left:491px;top:8px;width:281px;height:19px;',
		},
	]
});