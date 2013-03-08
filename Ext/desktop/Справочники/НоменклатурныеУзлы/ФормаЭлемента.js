Ext.define('Справочники.НоменклатурныеУзлы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 377,width: 641,
	iconCls: 'bogus',
	title: 'Номенклатурные узлы',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:569px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:431px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:94px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:326px;top:57px;width:80px;height:19px;',
		},
	]
});