Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериода',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:377px;height:142px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчет пособия за период после 1 января 2007 года',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьПричинаНетрудоспособностиПереходногоПериода',
			text: 'Причина нетрудоспособности:',
			style: 'position:absolute;left:8px;top:8px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПричинаНетрудоспособностиПереходногоПериода',
			style: 'position:absolute;left:169px;top:8px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСлучайУходаЗаБольнымРебенкомПереходногоПериода1',
			text: 'В случае ухода за ребенком:',
			style: 'position:absolute;left:8px;top:36px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СлучайУходаЗаБольнымРебенкомПереходногоПериода',
			style: 'position:absolute;left:169px;top:36px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентОплатыПереходногоПериода1',
			text: 'Процент среднего заработка:',
			style: 'position:absolute;left:8px;top:62px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыПереходногоПериода',
			style: 'position:absolute;left:169px;top:62px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеПособияПереходногоПериода',
			text: 'Ограничение:',
			style: 'position:absolute;left:8px;top:90px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОграничениеПособияПереходногоПериода',
			style: 'position:absolute;left:169px;top:90px;width:200px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:117px;width:377px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});