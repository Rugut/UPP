Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.СообщениеОбОтзывеЗаявления',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:513px;height:267px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Сообщение об отзыве заявления',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Рег. номер заявления в НО:',
			style: 'position:absolute;left:10px;top:85px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегНомДок',
			width: 303,
			height: 19,
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
			disabled: false,
			name: 'ДатаОснОтз',
			width: 303,
			height: 19,
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
			disabled: false,
			name: 'ДатаРегЭл',
			width: 303,
			height: 19,
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
			disabled: false,
			name: 'ДатаРегБум',
			width: 303,
			height: 19,
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
			disabled: false,
			name: 'НомерДокНП',
			width: 303,
			height: 19,
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
			disabled: false,
			name: 'КодСтранПрод1',
			width: 303,
			height: 19,
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
			disabled: false,
			name: 'ПричЗам',
			width: 303,
			height: 19,
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
			disabled: false,
			name: 'ДатаДокНП',
			width: 303,
			height: 19,
			style: 'position:absolute;left:202px;top:60px;width:303px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:242px;width:513px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});