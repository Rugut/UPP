Ext.define('Справочники.ЗаявкиКандидатов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 665,
	iconCls: 'bogus',
	title: 'Кандидат',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:392px;top:35px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:35px;width:253px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:200px;width:341px;height:163px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РезультатЗакрытия',
			style: 'position:absolute;left:366px;top:507px;width:291px;height:40px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:490px;top:438px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаЗадач',
			style: 'position:absolute;left:490px;top:414px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникИнформации',
			style: 'position:absolute;left:490px;top:390px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОткрытьРезюме',
			text: 'Открыть резюме',
			style: 'position:absolute;left:490px;top:33px;width:167px;height:24px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:490px;top:462px;width:167px;height:19px;',
		},
	]
});