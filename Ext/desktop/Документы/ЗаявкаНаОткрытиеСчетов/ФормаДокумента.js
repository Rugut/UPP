Ext.define('Документы.ЗаявкаНаОткрытиеСчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 647,
	iconCls: 'bogus',
	title: 'Заявка на открытие счетов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:419px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчет',
			style: 'position:absolute;left:419px;top:103px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговора',
			style: 'position:absolute;left:86px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:398px;width:553px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:86px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВида',
			style: 'position:absolute;left:78px;top:202px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодВида',
			style: 'position:absolute;left:234px;top:202px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВалюты',
			style: 'position:absolute;left:234px;top:177px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидВкладаСтрокой',
			style: 'position:absolute;left:78px;top:177px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыплатыЗаработнойПлаты',
			style: 'position:absolute;left:504px;top:177px;width:49px;height:19px;',
		},
	]
});