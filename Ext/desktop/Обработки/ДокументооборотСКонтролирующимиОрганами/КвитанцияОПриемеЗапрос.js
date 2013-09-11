Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.КвитанцияОПриемеЗапрос',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:563px;height:256px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Квитанция о приеме',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя принятого файла:',
			style: 'position:absolute;left:8px;top:46px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПринятФайла',
			width: 362,
			height: 19,
			style: 'position:absolute;left:193px;top:47px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата и время представления:',
			style: 'position:absolute;left:8px;top:72px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаВремяПредст',
			width: 362,
			height: 19,
			style: 'position:absolute;left:193px;top:73px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата поступления отчета:',
			style: 'position:absolute;left:8px;top:151px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаПост',
			width: 362,
			height: 19,
			style: 'position:absolute;left:193px;top:152px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код формы по КНД:',
			style: 'position:absolute;left:8px;top:98px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КНД',
			width: 362,
			height: 19,
			style: 'position:absolute;left:193px;top:99px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Наименование предст. документа:',
			style: 'position:absolute;left:8px;top:124px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаимВидДок',
			width: 362,
			height: 19,
			style: 'position:absolute;left:193px;top:125px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Рег. номер документа в НО:',
			style: 'position:absolute;left:8px;top:203px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегНом',
			width: 362,
			height: 19,
			style: 'position:absolute;left:193px;top:204px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Дата принятия отчета:',
			style: 'position:absolute;left:8px;top:177px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаПрин',
			width: 362,
			height: 19,
			style: 'position:absolute;left:193px;top:178px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Налоговый орган:',
			style: 'position:absolute;left:8px;top:8px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НалоговыйОрган',
			width: 362,
			height: 19,
			style: 'position:absolute;left:193px;top:9px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:36px;width:547px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:231px;width:563px;height:25px;',
			width: 563,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					tooltip:'',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});