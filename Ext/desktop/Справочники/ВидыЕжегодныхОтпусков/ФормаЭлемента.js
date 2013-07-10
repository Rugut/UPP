Ext.define('Справочники.ВидыЕжегодныхОтпусков.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:183px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вид ежегодного отпуска',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:350px;top:33px;width:32px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:382px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 251,
			height: 19,
			style: 'position:absolute;left:93px;top:33px;width:251px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Способ расчета остатка отпуска:',
			style: 'position:absolute;left:8px;top:59px;width:454px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДнейОтпускаВГод',
			text: 'количество дней отпуска в год:',
			style: 'position:absolute;left:254px;top:131px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоДнейОтпускаВГод',
			style: 'position:absolute;left:419px;top:131px;width:43px;height:19px;',
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Предоставлять отпуск всем сотрудникам',
			labelWidth: 50,
			style: 'position:absolute;left:8px;top:131px;width:232px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По календарным дням',
			style: 'position:absolute;left:8px;top:80px;width:454px;height:18px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По рабочим дням',
			style: 'position:absolute;left:8px;top:104px;width:454px;height:18px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Редактировать код',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:158px;width:470px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
	]
});