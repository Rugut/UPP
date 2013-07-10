Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиРаботаНаСевере',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:304px;height:165px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о стаже работы на севере',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Запись действует с:',
			style: 'position:absolute;left:8px;top:113px;width:163px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Период',
			width: 120,
			height: 19,
			style: 'position:absolute;left:176px;top:113px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокНачисленияСеверныхНадбавок',
			text: 'Порядок начисления надбавок:',
			style: 'position:absolute;left:8px;top:8px;width:163px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПорядокНачисленияСеверныхНадбавок',
			width: 120,
			height: 19,
			style: 'position:absolute;left:176px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСеверныйСтажДней',
			text: 'Дней:',
			style: 'position:absolute;left:209px;top:73px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СеверныйСтажДней',
			style: 'position:absolute;left:251px;top:73px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачальныйПроцентСевернойНадбавки',
			text: 'Начальный процент надбавки:',
			style: 'position:absolute;left:8px;top:32px;width:163px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачальныйПроцентСевернойНадбавки',
			style: 'position:absolute;left:176px;top:32px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСеверныйСтажМесяцев',
			text: 'Месяцев:',
			style: 'position:absolute;left:99px;top:73px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Северный стаж',
			style: 'position:absolute;left:8px;top:55px;width:288px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СеверныйСтажМесяцев',
			style: 'position:absolute;left:154px;top:73px;width:40px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:103px;width:288px;height:6px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСеверныйСтажЛет',
			text: 'Лет:',
			style: 'position:absolute;left:13px;top:73px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СеверныйСтажЛет',
			style: 'position:absolute;left:47px;top:73px;width:40px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:140px;width:304px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'История...',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});