Ext.require(['Данные.Обработки.ПодборПараметровРасшифровкиПлатежа'], function () 
{
	Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ПараметрыЗаполненияПлан',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:314px;height:237px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка заполнения расшифровки платежа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			text: 'Заполнение',
			style: 'position:absolute;left:8px;top:25px;width:298px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Порядок погашения',
			style: 'position:absolute;left:8px;top:95px;width:298px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать сумму:',
			style: 'position:absolute;left:8px;top:185px;width:116px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаДляПодбора',
			style: 'position:absolute;left:126px;top:185px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:314px;height:25px;',
			width: 314,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
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
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
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
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:212px;width:314px;height:25px;',
			width: 314,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});