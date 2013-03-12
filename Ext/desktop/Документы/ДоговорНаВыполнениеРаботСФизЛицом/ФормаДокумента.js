Ext.define('Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:350px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договор на выполнение работ с физ. лицом',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:14px;top:129px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:102px;top:129px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:14px;top:81px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:212px;top:307px;width:41px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:256px;top:307px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимость',
			text: 'Стоимость:',
			style: 'position:absolute;left:14px;top:307px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаЗаРаботу',
			style: 'position:absolute;left:102px;top:307px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:14px;top:428px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:428px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:14px;top:403px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:102px;top:403px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Договор:',
			style: 'position:absolute;left:14px;top:180px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Сроки, с:',
			style: 'position:absolute;left:14px;top:235px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:102px;top:235px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'по:',
			style: 'position:absolute;left:192px;top:235px;width:41px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:236px;top:235px;width:86px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:350px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Перечитать',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Отмена проведения',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Перечитать',
				},
				'-',
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Провести',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Записать и закрыть',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Отмена проведения',
				},
				{
					text:'Провести',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:350px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:102px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:184px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:202px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:102px;top:81px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:14px;top:105px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:102px;top:105px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:102px;top:259px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Начисление:',
			style: 'position:absolute;left:14px;top:259px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Оплата:',
			style: 'position:absolute;left:14px;top:283px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактерОплаты',
			style: 'position:absolute;left:102px;top:283px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВычета',
			style: 'position:absolute;left:102px;top:379px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодВычета',
			text: 'Код вычета:',
			style: 'position:absolute;left:14px;top:379px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Договор',
			style: 'position:absolute;left:102px;top:180px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеОтраженияВУчета',
			style: 'position:absolute;left:102px;top:355px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеОтраженияВУчета',
			text: 'Учет:',
			style: 'position:absolute;left:14px;top:355px;width:85px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:202px;width:328px;height:28px;',
			height: 28,width: 328,
			items:
			[
				{
					title:'Страница авторских',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидАвторскогоДоговора',
			text: 'Вид авторского договора:',
			style: 'position:absolute;left:0px;top:0px;width:83px;height:28px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидАвторскогоДоговора',
			style: 'position:absolute;left:88px;top:6px;width:240px;height:19px;',
		},
					]
				},
				{
					title:'Страница студ отрядов',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Заключен со студентом, работающим в студотряде',
			style: 'position:absolute;left:0px;top:4px;width:328px;height:19px;',
		},
					]
				},
			]
		},
	]
});