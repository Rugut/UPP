Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериода',
	{
	extend: 'Ext.window.Window',
	height: 142,width: 377,
	iconCls: 'bogus',
	title: 'Расчет пособия за период после 1 января 2007 года',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаНетрудоспособностиПереходногоПериода',
			style: 'position:absolute;left:169px;top:8px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СлучайУходаЗаБольнымРебенкомПереходногоПериода',
			style: 'position:absolute;left:169px;top:36px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатыПереходногоПериода',
			style: 'position:absolute;left:169px;top:62px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособияПереходногоПериода',
			style: 'position:absolute;left:169px;top:90px;width:200px;height:19px;',
		},
	]
});