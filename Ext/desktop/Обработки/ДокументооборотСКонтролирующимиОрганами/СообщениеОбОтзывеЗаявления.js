Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.СообщениеОбОтзывеЗаявления',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:513px;height:267px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сообщение об отзыве заявления',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:242px;width:513px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Рег. номер заявления в НО:',
			style: 'position:absolute;left:10px;top:85px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНомДок',
			style: 'position:absolute;left:202px;top:85px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Дата служебной записки - основания отзыва заявления:',
			style: 'position:absolute;left:10px;top:180px;width:181px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОснОтз',
			style: 'position:absolute;left:202px;top:185px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Дата регистрации в НО в электронном виде:',
			style: 'position:absolute;left:10px;top:110px;width:181px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегЭл',
			style: 'position:absolute;left:202px;top:115px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Дата регистрации в НО на бумажном носителе:',
			style: 'position:absolute;left:10px;top:145px;width:181px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегБум',
			style: 'position:absolute;left:202px;top:150px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Номер заявления:',
			style: 'position:absolute;left:10px;top:35px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокНП',
			style: 'position:absolute;left:202px;top:35px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Код страны продавца:',
			style: 'position:absolute;left:10px;top:215px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодСтранПрод1',
			style: 'position:absolute;left:202px;top:215px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Причина замены заявления:',
			style: 'position:absolute;left:10px;top:10px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричЗам',
			style: 'position:absolute;left:202px;top:10px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Дата заявления:',
			style: 'position:absolute;left:10px;top:60px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокНП',
			style: 'position:absolute;left:202px;top:60px;width:303px;height:19px;',
		},
	]
});