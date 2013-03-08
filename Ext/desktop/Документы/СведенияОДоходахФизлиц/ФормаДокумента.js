Ext.define('Документы.СведенияОДоходахФизлиц.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 630,
	iconCls: 'bogus',
	title: 'Сведения о доходах физических лиц для ИФНС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:527px;width:526px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:437px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактныйТелефонОтветственного',
			style: 'position:absolute;left:437px;top:105px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьОтветственного',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторФайла',
			style: 'position:absolute;left:267px;top:152px;width:252px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьИдентификаторФайла',
			text: '',
			style: 'position:absolute;left:519px;top:152px;width:22px;height:19px;',
		},
	]
});