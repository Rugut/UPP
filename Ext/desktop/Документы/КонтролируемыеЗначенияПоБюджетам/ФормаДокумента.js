Ext.define('Документы.КонтролируемыеЗначенияПоБюджетам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:410px;height:458px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контролируемые значения по бюджетам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:94px;top:57px;width:308px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Вид контр. значений:',
			style: 'position:absolute;left:8px;top:85px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидКонтролируемыхЗначений',
			style: 'position:absolute;left:182px;top:85px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Использование контр. значений:',
			style: 'position:absolute;left:8px;top:109px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспользованиеКонтролируемыхЗначений',
			style: 'position:absolute;left:182px;top:109px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Вид ограничения оборотов:',
			style: 'position:absolute;left:8px;top:133px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОграниченияОборотов',
			style: 'position:absolute;left:182px;top:133px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Контролирующий сценарий:',
			style: 'position:absolute;left:8px;top:157px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтролирующийСценарий',
			style: 'position:absolute;left:182px;top:157px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:433px;width:410px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:176px;width:394px;height:177px;',
			height: 177,width: 394,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Выборочно',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:8px;width:394px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:33px;width:394px;height:144px;',
			height: 144,width: 394,
			columns:
			[
				{
					text:'Период',
					width:'80',
				},
				{
					text:'Вид отклонения контролируемых значений',
					width:'100',
				},
				{
					text:'Статья оборотов',
					width:'120',
				},
				{
					text:'Отклонение',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'ЦФО',
					width:'120',
				},
				{
					text:'Проект',
					width:'120',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
			]
		},
					]
				},
				{
					title:'ПоВсем',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНачалоКонтроля',
			text: 'Начало контр. интервала:',
			style: 'position:absolute;left:0px;top:5px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонцаКонтролирующегоСценария',
			style: 'position:absolute;left:174px;top:29px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонецКонтроля',
			text: 'Конец контр. интервала:',
			style: 'position:absolute;left:0px;top:29px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отклонение',
			style: 'position:absolute;left:174px;top:77px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтклонение',
			text: 'Отклонение, %:',
			style: 'position:absolute;left:0px;top:77px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать обороты по ЦФО',
			style: 'position:absolute;left:0px;top:101px;width:202px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать обороты по проектам',
			style: 'position:absolute;left:0px;top:121px;width:216px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать обороты по контрагентам',
			style: 'position:absolute;left:0px;top:141px;width:238px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать обороты по номенклатуре',
			style: 'position:absolute;left:0px;top:161px;width:238px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтклоненияКонтролируемыхЗначений',
			style: 'position:absolute;left:174px;top:53px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Вид отклонения:',
			style: 'position:absolute;left:0px;top:53px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаКонтролирующегоСценария',
			style: 'position:absolute;left:174px;top:5px;width:100px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:382px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:93px;top:382px;width:309px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:358px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:93px;top:358px;width:309px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:406px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:93px;top:406px;width:309px;height:19px;',
		},
	]
});