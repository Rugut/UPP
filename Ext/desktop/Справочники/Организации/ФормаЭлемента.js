Ext.define('Справочники.Организации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 669,width: 579,
	iconCls: 'bogus',
	title: 'Организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:507px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:134px;top:33px;width:332px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Префикс',
			style: 'position:absolute;left:279px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГоловнаяОрганизация',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:134px;top:81px;width:437px;height:66px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойБанковскийСчет',
			style: 'position:absolute;left:134px;top:304px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПлательщикаПриПеречисленииНалогов',
			style: 'position:absolute;left:134px;top:209px;width:437px;height:66px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЮрФизЛицо',
			style: 'position:absolute;left:134px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндивидуальныйПредприниматель',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеСокращенное',
			style: 'position:absolute;left:134px;top:152px;width:437px;height:34px;',
		},
	]
});