Ext.define('Справочники.Номенклатура.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 475,width: 616,
	iconCls: 'bogus',
	title: 'Элемент Номенклатура',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:553px;top:56px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:226px;top:56px;width:297px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:139px;top:196px;width:469px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Артикул',
			style: 'position:absolute;left:226px;top:79px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:424px;width:518px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:226px;top:33px;width:382px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:226px;top:102px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидНоменклатуры',
			style: 'position:absolute;left:451px;top:79px;width:157px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаХраненияОстатков',
			style: 'position:absolute;left:226px;top:125px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаДляОтчетов',
			style: 'position:absolute;left:226px;top:148px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияМест',
			style: 'position:absolute;left:226px;top:172px;width:73px;height:19px;',
		},
	]
});