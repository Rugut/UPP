Ext.define('Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 520,width: 1000,
	iconCls: 'bogus',
	title: 'Сведения о страховых взносах и стаже застрахованных лиц (СЗВ-4, СЗВ-6)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:553px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:653px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:102px;top:33px;width:318px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:553px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:468px;width:778px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:102px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:294px;top:81px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:102px;top:57px;width:318px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:553px;top:81px;width:80px;height:19px;',
		},
	]
});