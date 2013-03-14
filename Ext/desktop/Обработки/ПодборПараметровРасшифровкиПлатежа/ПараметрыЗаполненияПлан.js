Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ПараметрыЗаполненияПлан',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:314px;height:237px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка заполнения расшифровки платежа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:212px;width:314px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'По фактической задолженности',
			style: 'position:absolute;left:14px;top:46px;width:214px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По оперативной задолженности (с учетом заказов)',
			style: 'position:absolute;left:14px;top:67px;width:280px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сначала ранние задолженности',
			style: 'position:absolute;left:14px;top:116px;width:184px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сначала поздние задолженности',
			style: 'position:absolute;left:14px;top:136px;width:192px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По табличной части документа',
			style: 'position:absolute;left:14px;top:156px;width:180px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать сумму:',
			style: 'position:absolute;left:8px;top:185px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДляПодбора',
			style: 'position:absolute;left:126px;top:185px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:314px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});