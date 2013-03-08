Ext.define('Справочники.НоменклатурныеГруппы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 452,
	iconCls: 'bogus',
	title: 'Номенклатурные группы',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:59px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:94px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:380px;top:59px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:114px;top:131px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаХраненияОстатков',
			style: 'position:absolute;left:364px;top:131px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:350px;height:19px;',
		},
	]
});