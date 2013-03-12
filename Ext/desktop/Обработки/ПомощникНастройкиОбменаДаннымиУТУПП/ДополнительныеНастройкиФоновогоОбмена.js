Ext.define('Обработки.ПомощникНастройкиОбменаДаннымиУТУПП.ДополнительныеНастройкиФоновогоОбмена',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:494px;height:209px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные настройки фонового обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:184px;width:494px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОФоновомОбмене',
			text: 'Сопоставление объектов в двух информационных базах будет выполнено в фоновом режиме. При этом в каждый пакет данных, передаваемый при обмене данными, будет добавляться дополнительная информация о соответствии объектов',
			style: 'position:absolute;left:8px;top:8px;width:478px;height:64px;',
		},
		{
			xtype: 'button',
			name: 'ВыполнитьПодсчетОбъектовДляКоторыхНужноСопоставление',
			text: 'Подсчитать',
			style: 'position:absolute;left:328px;top:157px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоОбъектовДляСопоставления',
			text: 'Количество объектов для сопоставления: ???',
			style: 'position:absolute;left:8px;top:157px;width:315px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДополняемыхОбъектов',
			text: 'Дополнять пакет до фиксированного количества объектов:',
			style: 'position:absolute;left:8px;top:133px;width:315px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОбъектовДляФоновогоОбмена',
			style: 'position:absolute;left:328px;top:133px;width:124px;height:19px;',
		},
	]
});