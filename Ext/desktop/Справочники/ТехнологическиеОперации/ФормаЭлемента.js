Ext.define('Справочники.ТехнологическиеОперации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 336,width: 418,
	iconCls: 'bogus',
	title: 'Технологические операции',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:346px;top:59px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:59px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнаяСтатьяЗатратНаПроизводство',
			style: 'position:absolute;left:233px;top:87px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияЗарплатыВБухучете',
			style: 'position:absolute;left:233px;top:160px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнаяНоменклатурнаяГруппа',
			style: 'position:absolute;left:233px;top:135px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Расценка',
			style: 'position:absolute;left:233px;top:235px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:233px;top:185px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:233px;top:210px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НормаВремени',
			style: 'position:absolute;left:233px;top:260px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойСпособРаспределенияЗатратНаВыпуск',
			style: 'position:absolute;left:233px;top:111px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:316px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Коэффициент',
			style: 'position:absolute;left:233px;top:284px;width:83px;height:19px;',
		},
	]
});